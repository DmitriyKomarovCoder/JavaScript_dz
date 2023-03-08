export class PopUp {
    constructor(parent) {
        this.parent = parent;
    }
    getHTML(data) {
        return (
            `
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body">
                    Привет мир! Это тост-сообщение.
                <div class="mt-2 pt-2 border-top">
                <button type="button" class="btn btn-primary btn-sm">Действовать</button>
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Закрыть</button>
                </div>
            </div>
        </div>
            `
        )
    }
    
    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}