export const generateHtml = text => {
  try {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    );
  } catch (error) {
    console.log("--generateHtml--", error);
    return <></>;
  }
};
