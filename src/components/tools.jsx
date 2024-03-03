import { Tools } from "../utils/constant";

export default function Button() {
  console.log(Tools);
  return (
    <>
      {Tools.map((tool) => (
        <div key={tool.id} className="mb-10">
          <span className={tool.color}>{tool.label}</span>
          <div className="mx-5 mt-5">
            {tool.designTool && (
              <div className="flex gap-4">
                {tool.designTool.map((toolSet) => (
                  <span
                    key={toolSet.id_tool}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={toolSet.toolsIcon}
                      alt="iconTheme"
                      width={25}
                      height={20}
                      className="min-w-10"
                    />
                    <div className="justify-end">
                      <h1>{toolSet.nameTools}</h1>
                    </div>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
