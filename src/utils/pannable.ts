export function pannable(node) {
    let x: number;
    let y: number;

    function handle_mousedown(event: MouseEvent) {
        x = event.clientX;
        y = event.clientY;
        node.dispatchEvent(new CustomEvent('panstart', {
            detail: { x, y }
        }));
        window.addEventListener('mousemove', handle_mousemove);
        window.addEventListener('mouseup', handle_mouseup);
        window.addEventListener('mouseleave', handle_mouseleave);
    }

    function handle_mousemove(event: MouseEvent) {
        const dx = event.clientX - x;
        const dy = event.clientY - y;
        x = event.clientX;
        y = event.clientY;
        node.dispatchEvent(new CustomEvent('panmove', {
            detail: { x, y, dx, dy }
        }));
    }

    function handle_mouseup(event: MouseEvent) {
        x = event.clientX;
        y = event.clientY;
        node.dispatchEvent(new CustomEvent('panend', {
            detail: { x, y }
        }));
        window.removeEventListener('mousemove', handle_mousemove);
        window.removeEventListener('mouseup', handle_mouseup);
        window.removeEventListener('mouseleave', handle_mouseleave);
    }

    function handle_mouseleave(event: MouseEvent) {
        handle_mouseup(event);
    }

    node.addEventListener('mousedown', handle_mousedown);
    return {
        destroy() {
            node.removeEventListener('mousedown', handle_mousedown);
        }
    }
}
