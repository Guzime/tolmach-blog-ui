import Image from "next/image";
import LinkItem from "./link_item"

const Contact: React.FC = () => {
  return (
    <div className="flex mt-3">
      <div className="flex w-full bg-white rounded-xl  border border-customBorder p-4">
        <div className="flex flex-col flex-1">
          <LinkItem
          url="mailto:forblachok@yandex.ru"
          resource="Mail"/>
          <LinkItem
          url="https://t.me/tolmachevski"
          resource="Telegram"/>
          <LinkItem
          url="https://github.com/Guzime"
          resource="Github"/>
        </div>
        <div className="flex flex-col flex-1">
          <LinkItem
          url="https://t.me/tolmachevski"
          resource="LinkedIn"/>
          <LinkItem
          url="https://github.com/Guzime"
          resource="Instagram"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
