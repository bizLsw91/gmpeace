export const appConfig = {
    db_table:{
        notices: process.env.CUSTOM_ENV === 'development' ? 'NOTICES_DEV' : 'NOTICES'
    }
}