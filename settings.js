module.exports = {
  // Railway injects PORT. Node-RED can read it from settings.js.
  uiPort: process.env.PORT || 1880,

  // Keep encrypted credentials stable across redeploys
  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET,

  // Move editor away from "/" so removing /dashboard won't show it
  httpAdminRoot: "/admin",

  // Secure editor + admin API with login
  adminAuth: {
    type: "credentials",
    users: [{
      username: process.env.NODE_RED_USERNAME || "admin",
      password: process.env.NODE_RED_PASSWORD, // bcrypt hash
      permissions: "*"
    }]
  },

  // Dashboard at /dashboard
  ui: { path: "dashboard" }
};