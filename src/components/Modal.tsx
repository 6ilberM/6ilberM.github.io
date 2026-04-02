export default ({ id, children }: { id: string; children: any }) => (
  <div id={id} class="modal-overlay" style="display: none;">
    <div class="modal-content">
      {children}
      <button
        class="modal-close-button"
        onclick={`document.getElementById('${id}').style.display='none'`}
      >
        Close
      </button>
    </div>
  </div>
);
