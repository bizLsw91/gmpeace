export const appConfig = {
    db_table:{
        notices: process.env.NODE_ENV === 'development' ? 'NOTICES_DEV' : 'NOTICES'
    }
}