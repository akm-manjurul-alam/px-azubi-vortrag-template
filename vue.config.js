module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData:
                    `
                    @import "@/globals/transfer.scss";
                    `
            }
        }
    }
};
