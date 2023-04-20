export class PopUp {
    constructor(parent) {
        this.parent = parent;
    }



    getHTML(data) {
        return (
        `
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <img src="/media/Без имени.jpeg" class="rounded me-2" alt="..." width="25" height="25">
              <strong class="me-auto">Telegram канал</strong>
              <small>invest.com</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
            </div>
            <div class="toast-body">
                <a href="https://t.me/Kosmatoff">Получить решение!</a>
            </div>
          </div>
        </div>
        
        `
        )
    }
    
    render(data) {
        const toastTrigger = document.getElementById('liveToastBtn')
        const toastLiveExample = document.getElementById('liveToast')
        if (toastTrigger) {
            toastTrigger.addEventListener('click', () => {
            const toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        })
        }
    }
}