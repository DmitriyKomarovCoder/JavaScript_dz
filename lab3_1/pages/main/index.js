import {ButtonComponent} from "../../components/button/index.js";
import {ProductPage} from "../product/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
    getData() {
        return [
            {
                id: 1,
                src: "/media/по-дох-1000x650.jpg",
                title: "Абсолютная доходность + Рискованный",
                text: "Стратегия 1",
                button: "13,60%"
            },
            {
                id: 2,
                src: "/media/9191.jpg",
                title: "Портфель ОФЗ УК Перспективный",
                text: "Стратегия 2",
                button: "5,40%"
            },
            {
                id: 3,
                src: "/media/756504759769718.jpg",
                title: "Портфель ОФЗ Консервативный",
                text: "Стратегия 3",
                button: "4,90%"
            },
        ]
    }
    clickCard(e) {
        const cardId = e.target.dataset.id
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))


        })
    }
 
}