import React from "react";

const SupportMeWidget: React.FC = () => {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
        (function() {
          var script = document.createElement('script');
          script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
          script.async = true;
          script.onload = function() {
            if (window.kofiWidgetOverlay) {
              window.kofiWidgetOverlay.draw('6ilberm', {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Support me',
                'floating-chat.donateButton.background-color': '#794bc4',
                'floating-chat.donateButton.text-color': '#fff'
              });
            }
          };
          document.body.appendChild(script);
        })();
      `,
            }}
        />
    );
};

export default SupportMeWidget;
