import React from "react";

interface CodecksWidgetProps {
  readonly projectSlug: string;
  readonly className?: string;
  readonly height?: string;
  readonly showHeader?: boolean;
  readonly title?: string;
  readonly width?: string;
}

const CodecksOpenFrameWidget: React.FC<CodecksWidgetProps> = ({
  projectSlug,
  height = "600px",
  width = "100%",
  className = "",
  title,
  showHeader = true,
}) => {
  return (
    <div className={`codecks-widget-container ${className}`}>
      {showHeader && title && (
        <div className="codecks-header">
          <h3>Project Progress - {title}</h3>
          <a
            href={`https://open.codecks.io/${projectSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="codecks-external-link"
          >
            View Full Board →
          </a>
        </div>
      )}
      <div className="codecks-iframe-wrapper">
        <iframe
          src={`https://open.codecks.io/${projectSlug}`}
          style={{
            width,
            height,
            border: "none",
            borderRadius: "8px",
          }}
          title={`Codecks Project Board - ${title || projectSlug}`}
        />
      </div>
    </div>
  );
};

export default CodecksOpenFrameWidget;
