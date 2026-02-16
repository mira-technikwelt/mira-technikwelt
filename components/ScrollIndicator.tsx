"use client"

export default function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="scroll-indicator"
      onClick={scrollToContent}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && scrollToContent()}
    >
      <div className="mouse">
        <div className="wheel"></div>
      </div>
    </div>
  );
}
