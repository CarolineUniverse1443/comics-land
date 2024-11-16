const app = {
    data() {
        return {
            currentPage: 'home',
            slides: [
                'Media/images/товары/large_1.jpg',
                'Media/images/товары/large_batman.jpg',
                'Media/images/товары/large_cool.jpg',
                'Media/images/товары/large_doctor.jpg',
                'Media/images/товары/large_iron.jpg',
            ],
            slideVisible: 0,
            cart: [],
        }
    },
    created() {

    },
    computed: {
        slidesLen() {
            return this.slides.length - 1
        }
    },
    methods: {
        next() {
            if(this.slideVisible >= this.slidesLen)
                this.slideVisible = 0
            else
                this.slideVisible++
            },
        prev() {
            if(this.slideVisible <= 0)
                this.slideVisible = this.slidesLen
            else
                this.slideVisible--
        }, 
        addGood(good) {
			const foundGood = this.cart.find(g => {
				if(g.id === good.id)
				{
					return true
				}
			})

			if(!foundGood)
			{
				let newGood = {...good}
				newGood.count = 1
				this.cart.push(newGood)
			} 
			else
				foundGood.count++
		},
		deleteGood(id) {
			this.cart = this.cart.filter(p=>p.id!==id)
			/*this.cart = this.cart.splice(good.id, 1)*/
		},
		clearCart() {
			this.cart = []
		},
		showGood(good) {
			const product = {image: good.image, title: good.title, price: good.price, id:0}
        	this.view[0] = product;
		},
		minusPr(good) {
			if(good.count>1) good.count--
		}
    }
}

Vue.createApp(app).mount('#app')