interface CodecksWidgetProps {
  projectSlug: string;
  className?: string;
  height?: string;
  title?: string;
  width?: string;
  showHeader?: boolean;
}

export default ({
  projectSlug,
  height = "600px",
  width = "100%",
  className = "",
  title,
  showHeader = true,
}: CodecksWidgetProps) => {
  return (
    <div class={`codecks-widget-container ${className}`}>
      {showHeader && title && (
        <div class="codecks-header">
          <h3>Project Progress - {title}</h3>
          <a
            href={`https://open.codecks.io/${projectSlug}`}
            target="_blank"
            rel="noopener"
            class="codecks-external-link"
          >
            View Full Board →
          </a>
        </div>
      )}
      <div class="codecks-iframe-wrapper">
        <iframe
          src={`https://open.codecks.io/${projectSlug}`}
          style={`width: ${width}; height: ${height}; border: none; border-radius: 8px;`}
          title={`Codecks Project Board - ${title || projectSlug}`}
        />
      </div>
    </div>
  );
};
