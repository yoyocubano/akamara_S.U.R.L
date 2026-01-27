import { useState, useEffect } from 'react';
import { Activity, Users, Database, Mail, ArrowUpRight, BarChart3, Clock, AlertCircle } from 'lucide-react';
import { databases, APPWRITE_CONFIG } from '../../lib/appwrite';
import { Query } from 'appwrite';
import { useTranslation } from 'react-i18next';

export const StatusDashboard = () => {
    const { t } = useTranslation();
    const [dbStatus, setDbStatus] = useState<'connected' | 'error' | 'checking'>('checking');
    const [stats, setStats] = useState({
        liveVisitors: 0,
        totalVisits24h: 0,
        messageCount: 0
    });

    const [recentLogs, setRecentLogs] = useState<any[]>([]);

    const checkHealth = async () => {
        let dbOk = false;
        try {
            // 1. Check DB Connection
            await databases.listDocuments(
                APPWRITE_CONFIG.DATABASE_ID, 
                APPWRITE_CONFIG.COLLECTIONS.NOVEDADES, 
                [Query.limit(1)]
            );
            dbOk = true;
        } catch (error) {
            console.warn("Health check failed:", error);
        }
        setDbStatus(dbOk ? 'connected' : 'error');

        if (dbOk) {
            try {
                // 2. Fetch Stats & Real Logs
                const fiveMinsAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
                const liveDocs = await databases.listDocuments(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTIONS.ANALYTICS,
                    [Query.greaterThan('$createdAt', fiveMinsAgo)]
                );

                const logs = await databases.listDocuments(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTIONS.ANALYTICS,
                    [Query.orderDesc('$createdAt'), Query.limit(5)]
                );
                setRecentLogs(logs.documents);

                const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
                const dayDocs = await databases.listDocuments(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTIONS.ANALYTICS,
                    [Query.greaterThan('$createdAt', twentyFourHoursAgo)]
                );

                const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
                const interactions = await databases.listDocuments(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTIONS.ANALYTICS,
                    [
                        Query.greaterThan('$createdAt', sevenDaysAgo),
                        Query.or([
                            Query.equal('page', 'EVENT:form_submit'),
                            Query.equal('page', 'EVENT:email_click')
                        ])
                    ]
                );

                setStats({
                    liveVisitors: liveDocs.total,
                    totalVisits24h: dayDocs.total,
                    messageCount: interactions.total
                });
            } catch (error) {
                console.error("Dashboard stats failed:", error);
            }
        }
    };

    useEffect(() => {
        checkHealth();
        const interval = setInterval(checkHealth, 20000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4">
            <h1 className="text-3xl font-black text-white uppercase tracking-tight flex items-center gap-3 mb-8">
                <Activity className="w-8 h-8 text-amber-500" />
                {t('admin_dashboard.title')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Real-time Visitors */}
                <div className="relative group overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:border-amber-500/50">
                    <div className="absolute top-0 right-0 p-4">
                        <Users className="w-6 h-6 text-amber-500/50" />
                    </div>
                    <h3 className="text-slate-400 text-sm uppercase font-bold tracking-wider relative z-10">{t('admin_dashboard.visitors_now')}</h3>
                    <div className="mt-2 flex items-baseline gap-2 relative z-10">
                        <span className="text-4xl font-black text-white">{stats.liveVisitors}</span>
                        <span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
                            <ArrowUpRight className="w-3 h-3" />
                            {t('admin_dashboard.automatic')}
                        </span>
                    </div>
                    <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 animate-pulse w-1/3" style={{ width: stats.liveVisitors > 0 ? '100%' : '30%' }}></div>
                    </div>
                </div>

                {/* Total Visits 24h */}
                <div className="relative group overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:border-blue-500/50">
                    <div className="absolute top-0 right-0 p-4">
                        <BarChart3 className="w-6 h-6 text-blue-500/50" />
                    </div>
                    <h3 className="text-slate-400 text-sm uppercase font-bold tracking-wider relative z-10">{t('admin_dashboard.total_visits_24h')}</h3>
                    <div className="mt-2 flex items-baseline gap-2 relative z-10">
                        <span className="text-4xl font-black text-white">{stats.totalVisits24h}</span>
                        <span className="text-slate-500 text-xs font-bold">24h</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                        <Clock className="w-3 h-3" />
                        {t('admin_dashboard.active_monitor')}
                    </div>
                </div>

                {/* Database Health */}
                <div className="relative group overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:border-emerald-500/50">
                    <div className="absolute top-0 right-0 p-4">
                        <Database className="w-6 h-6 text-emerald-500/50" />
                    </div>
                    <h3 className="text-slate-400 text-sm uppercase font-bold tracking-wider relative z-10">{t('admin_dashboard.database')}</h3>
                    <div className="mt-2 flex items-center gap-3 relative z-10">
                        <div className={`w-3 h-3 rounded-full ${dbStatus === 'connected' ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-red-500 animate-pulse'}`}></div>
                        <span className="text-2xl font-black text-white uppercase tracking-tighter">
                            {dbStatus === 'connected' ? t('admin_dashboard.online') : t('admin_dashboard.error')}
                        </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                        <Activity className="w-3 h-3" />
                        {t('admin_dashboard.db_sync')}
                    </div>
                </div>

                {/* Interactions */}
                <div className="relative group overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:border-purple-500/50">
                    <div className="absolute top-0 right-0 p-4">
                        <Mail className="w-6 h-6 text-purple-500/50" />
                    </div>
                    <h3 className="text-slate-400 text-sm uppercase font-bold tracking-wider relative z-10">{t('admin_dashboard.contacts')}</h3>
                    <div className="mt-2 flex items-baseline gap-2 relative z-10">
                        <span className="text-4xl font-black text-white">{stats.messageCount}</span>
                        <span className="text-slate-500 text-xs font-bold uppercase">{t('admin_dashboard.last_7_days')}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                        <Activity className="w-3 h-3" />
                        {t('admin_dashboard.total')}
                    </div>
                </div>
            </div>

            {/* Reciente log real */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                        <Clock className="w-5 h-5 text-amber-500" />
                        {t('admin_dashboard.recent_activity')}
                    </h2>
                </div>

                <div className="space-y-4">
                    {recentLogs.length > 0 ? recentLogs.map((log) => (
                        <div key={log.$id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white uppercase tracking-tight">
                                        {log.user_email !== 'Anónimo' ? log.user_email : `Visitante ${log.device_info}`}
                                    </p>
                                    <p className="text-xs text-slate-500">Acción: {log.page}</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">
                                {new Date(log.$createdAt).toLocaleTimeString()}
                            </span>
                        </div>
                    )) : (
                        <p className="text-slate-500 text-sm font-bold uppercase py-10 text-center">Esperando actividad...</p>
                    )}
                </div>
            </div>
            
            {dbStatus === 'error' && (
                <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 text-sm font-bold">
                    <AlertCircle className="w-5 h-5" />
                    Error de conexión crítica con el motor de base de datos Appwrite. Verifique logs.
                </div>
            )}
        </div>
    );
};

export default StatusDashboard;
