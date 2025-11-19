import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarcodeReaderFilled = (props: IIcon) => {

  return (
    <Icon
      name='BarcodeReaderFilled'

      short_name='BarcodeReader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h449L569-520H439l-11 40h52v160h-94l-30 112q-11 39-43 63.5T240-120Zm520-640-25-54 145-66 24 55-144 65Zm120 280-145-65 25-55 144 66-24 54ZM760-650v-60h160v60H760Z"/>
    </Icon>
  );
};

IconMaterialBarcodeReaderFilled.displayName = 'OnesyIconMaterialBarcodeReaderFilled';

export default IconMaterialBarcodeReaderFilled;
