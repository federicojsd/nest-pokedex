
export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 5000,
    defaultLimit: +process.env.DEFAULTLIMIT || 3,
})