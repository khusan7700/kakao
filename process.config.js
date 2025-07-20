module.exports = {
  apps: [
    {
      name: "kakao",
      swd: "./",
      script: "./.next/transform.js",
      watch: false,
      env_production: {
        env_local: "production",
      },
      env_local: {
        NODE_ENV: "development",
      },
      instances: 1,
      exec_mode: "cluster",
    },
  ],
};
