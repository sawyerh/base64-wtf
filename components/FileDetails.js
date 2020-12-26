import { useEffect, useState } from "react";

function FileDetails({ file }) {
  const [details, setDetails] = useState();

  useEffect(() => {
    readFile();
  }, []);

  const readFile = () => {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        const dataUrl = reader.result;

        // Remove the Data-URL declaration preceding the Base64-encoded data
        const base64String = dataUrl.substr(
          dataUrl.indexOf("base64,") + "base64,".length
        );

        const base64Size = base64String.length;

        setDetails({
          base64Size,
          dataUrl,
          name: file.name,
          size: file.size,
          type: file.type,
        });
      },
      false
    );

    reader.readAsDataURL(file);
  };

  const bytesToMb = (bytes) => {
    return `${(bytes / 1000000).toFixed(1)} MB`;
  };

  const base64IncreasePercentage = () => {
    const increase = ((details.base64Size - details.size) / details.size) * 100;

    return `+${increase.toFixed(0)}%`;
  };

  console.log(details);

  return (
    <article className="shadow-xl border bg-white p-6 my-6 rounded">
      {!details && <p className="animate-pulse">Reading file&hellip;</p>}
      {details && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="prose">
              <dl>
                <dt className="font-semibold">Name:</dt>
                <dd className="mb-2">{details.name}</dd>

                <dt className="font-semibold">Base64-encoded file size:</dt>
                <dd className="mb-3 text-red-700">
                  {bytesToMb(details.base64Size)} ({base64IncreasePercentage()})
                </dd>

                <dt className="font-semibold">Original file size:</dt>
                <dd className="mb-2">{bytesToMb(details.size)}</dd>

                <dt className="font-semibold">Type:</dt>
                <dd className="mb-2">{details.type}</dd>
              </dl>
            </div>

            {details.type.match(/^image\//) && (
              <div>
                <img className="my-0" src={details.dataUrl} />
              </div>
            )}
          </div>
        </>
      )}
    </article>
  );
}

export default FileDetails;
