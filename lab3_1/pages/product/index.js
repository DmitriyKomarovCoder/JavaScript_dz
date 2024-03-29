import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import { PopUp } from "../../components/pop-up/index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        if (this.id == 1) {
            return {
                id: 1,
                src: "/media/по-дох-1000x650.jpg",
                title: `Абсолютная доходность + Рискованный`,
                text: "Инвестиционная компания единомышленников, в команде которой работают профессионалы с опытом работы на финансовых рынках более 20 лет. В команде эксперты, занимавшие ключевые позиции в крупных российских и швейцарских инвестиционных компаниях: Тройка Диалог, Управляющая компания Парма Менеджмент, Атон, Aton Swisse, VTB Private banking. Знания и компетенции членов команды подтверждены сертификатами Certified International Investment Analyst (ACIIA, Швейцария), дипломами MBA EPFL. Мы работаем в постоянном сотрудничестве с глобальными банками. Это дает нам возможность быть всегда в курсе происходящих изменений в индустрии управления активами. Мы активно внедряем новые технологии, позволяющие повысить эффективность управления стратегиями. Мы накопили большой практический опыт за более чем 20 лет работы на финансовых рынках. У нас были успехи и неудачи. Мы проводим анализ и совершенствуем свои стратегии. Мы не тренируемся на счетах наших клиентов, мы зарабатываем им реальные деньги. Наша миссия - помогать нашим клиентам эффективно инвестировать и надежно хранить свои активы с учетом персональных потребностей и ожиданий. Наша цель - работать исключительно в интересах наших клиентов и выстраивать долгосрочные отношения. Авторы: Игорь Вагизов, директор компании Инвестлэнд Опыт работы Управляющий активами в компании УК Парма Менеджмент Директор Пермского филиала Тройка диалог Сертификат CIIA (CertifiedInternational Investment Analyst) Евгений Климов Опыт работы Атон, Aton Suisse Geneva MBA EPFL Switzerland Игорь Чукаев Руководитель отдела инвестиционного консультирования компании Инвестлэнд Опыт работы Управляющий активами в компании УК Парма Менеджмент Сертификат CIIA (CertifiedInternational Investment Analyst)"
            }
        } else if (this.id == 2) {
            return { 
                id: 2,
                src: "/media/9191.jpg",
                title: `Портфель ОФЗ УК Перспективный`,
                text: "Команда департамента специализируется на разработке, внедрении и экспертизе торговых стратегий на базе акций, облигаций и производных финансовых инструментов на международных и Российском рынках. В команду департамента входят разработчики стратегий, эксперты с более чем 20‑летним опытом работы на фондовом рынке. Департамент производит сам и потребляет аналитический контент, который ложится в основу создания стратегий. При создании стратегии мы основываемся на ведущих мировых и российских практиках, которые получили подтвержденный результат в реальном времени. Особое внимание уделяется риск-менеджменту, риск-аналитики департамента и компании БКС регулярно проверяют соответствие стратегий ключевым параметрам. Вложившись в наши стратегии, вы можете быть уверены, что приобрели качественный продукт, проверенный временем, подтверждённый историей."
            }
        } else if (this.id == 3) {
            return { 
                id: 3,
                src: "/media/756504759769718.jpg",
                title: `Портфель ОФЗ Консервативный`,
                text: "Команда департамента специализируется на разработке, внедрении и экспертизе торговых стратегий на базе акций, облигаций и производных финансовых инструментов на международных и Российском рынках. В команду департамента входят разработчики стратегий, эксперты с более чем 20‑летним опытом работы на фондовом рынке. Департамент производит сам и потребляет аналитический контент, который ложится в основу создания стратегий. При создании стратегии мы основываемся на ведущих мировых и российских практиках, которые получили подтвержденный результат в реальном времени. Особое внимание уделяется риск-менеджменту, риск-аналитики департамента и компании БКС регулярно проверяют соответствие стратегий ключевым параметрам. Вложившись в наши стратегии, вы можете быть уверены, что приобрели качественный продукт, проверенный временем, подтверждённый историей."
            }
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        
        mainPage.render()
    }

    render() {
        
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)

        const popup = new PopUp(this.pageRoot)
        this.pageRoot.insertAdjacentHTML('beforeend', popup.getHTML())
        popup.render()
        // popup.toast('show')
    }
}