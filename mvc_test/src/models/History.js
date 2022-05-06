export default {
    data: [
        {keyword: '검색기록 1', date: '12.03'},
        {keyword: '검색기록 2', date: '12.03'},
        {keyword: '검색기록 3', date: '12.03'},
    ],

    list() {
        return Promise.resolve(this.data)
    },
    
    add(keyword = '') {
        keyword = keyowrd.trim()
        if(!keyword) return
        if(this.data.some(item => item.keyword === keyword)) {
            this.remove(keyword)
        }

        const date = '12.31'
        this.data = [{ keyword, date }, ...this.data]
    },

    remove(keyword) {
        this.data = this.data.filter(item => item.keyword !== keyword)
    }
}