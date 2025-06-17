const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Skill Swap API",
      version: "1.0.0",
      description: "API documentation for the Skill Swap project",
    },
    servers: [
      {
        url: "http://localhost:27018", // Update if using a different port
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"], // Scans route files for Swagger comments
};

module.exports = options;
