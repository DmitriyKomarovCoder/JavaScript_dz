import { PopUp } from "../../components/pop-up/index.js";

export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
                <div class="card mb-4 mx-auto" style="width: 1040px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.src}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.text}</p>
                                <button type="button" class="btn btn-primary" id="liveToastBtn">Получить решение!</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML("beforeend", html);
    
        const toast = new PopUp(this.parent);
        const toastTrigger = document.getElementById("liveToastBtn");
        if (toastTrigger) {
          toastTrigger.addEventListener("click", () => {
            toast.render();
          });
        }1
    }
}