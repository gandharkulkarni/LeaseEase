const config = {
    NAME: process.env.NAME || "LeaseEase",
    MONGO_URL: process.env.MONGO_URL || "mongodb+srv://user1:leaseease123@cluster0.oj9bxqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    PORT: process.env.PORT || 5000,
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:5000",
    FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
    JWT_KEY: "XNJJDCNDJBCHDVBH",
    CLAUDE_KEY: "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",
    CORS_OPTIONS: {
        WHITELISTDOMAINS: [
            /.*/ //allow all domains (wildcard match *)
        ]
    },
};


export default config;
