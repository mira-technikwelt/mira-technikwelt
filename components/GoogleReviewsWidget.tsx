"use client";

export default function GoogleReviewsWidget() {
  return (
    <div className="flex justify-center w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.123456789!2d10.123456789!3d48.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479da9c51d190f8d%3A0x615f09002027cf1f!2sMIRA%20Technikwelt!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl"
      />
    </div>
  );
}
