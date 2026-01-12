import { Client, Storage } from 'node-appwrite';

const PROJECT_ID = '696075130002ba18c0ac';
const API_KEY = 'standard_bf7b8f7becfe7cf18539d64ff4cbd8ce775657f4f86a4715003515ce2fa2f04f4e0c71f43d6de7f811f90f71640c284ff6214b0c49bc47323c1b3d444859f6daa3582922768844ef6928f5b2df01076b80a8b337d83ea79bdd94a09b454f5abdc280aaf3d37886435f80683361eb6e4148b6c46d74597076bc17c3aa90e4ebd3';
const ENDPOINT = 'https://cloud.appwrite.io/v1';

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

const storage = new Storage(client);

async function inspect() {
    console.log('🔍 Inspecting Appwrite Storage Buckets...');
    try {
        const buckets = await storage.listBuckets();
        console.log(`Found ${buckets.total} buckets:`);
        
        for (const bucket of buckets.buckets) {
            console.log(`\n📂 Bucket Name: "${bucket.name}"`);
            console.log(`   ID: ${bucket.$id}`);
            console.log(`   Enabled: ${bucket.enabled}`);
            console.log(`   Permissions: ${bucket.$permissions.join(', ') || 'NONE'}`);
        }
        
    } catch (e) {
        console.error('Error listing buckets:', e.message);
    }
}

inspect();
