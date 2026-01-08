{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.python3
    pkgs.git
    pkgs.gh
    pkgs.ripgrep
    pkgs.fd
    pkgs.jq
    pkgs.zip
  ];
  idx.extensions = [
    "googlecloudtools.cloudcode"
    "esbenp.prettier-vscode"
    "dbaeumer.vscode-eslint"
  ];
  idx.previews = {
    enable = true;
    previews = {
      web = {
        command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
        manager = "web";
      };
    };
  };
}