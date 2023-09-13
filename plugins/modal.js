// $ додаємо, щоб явно було видно, що це плагін
//$.modal ()
//$ - якийсь об'єкт, modal () - викликаний метод в того об'єкта

//приватна функція
// _ показує, що це системна ф-ія, яка не повинна бути викликана окремо (приватна)
    function _createModal(options) {
const modal = document.createElement('div')
modal.classList.add('dmodal')
modal.insertAdjacentHTML('afterbegin', `
<div class="modal-overlay">
    <div class="modal-window">
        <div class="modal-header">
            <span class="modal-title">Modal Title</span>
            <span class="modal-close">&times;</span> <!--хрестик-->
        </div>
        <div class="madal-body">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="modal-footer">
            <button>Ok</button>
            <button>Cancel</button>
        </div>
    </div>
</div>
`)
document.body.appendChild(modal)
return modal
    }

$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    //зтиповий приклад амикання:
    return {
        open() {
           !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() {}
    }
}