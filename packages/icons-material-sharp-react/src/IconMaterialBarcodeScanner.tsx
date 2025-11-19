import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarcodeScanner = (props: IIcon) => {

  return (
    <Icon
      name='BarcodeScanner'

      short_name='BarcodeScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-200h80v120h120v80H40Zm680 0v-80h120v-120h80v200H720ZM160-240v-480h80v480h-80Zm120 0v-480h40v480h-40Zm120 0v-480h80v480h-80Zm120 0v-480h120v480H520Zm160 0v-480h40v480h-40Zm80 0v-480h40v480h-40ZM40-640v-200h200v80H120v120H40Zm800 0v-120H720v-80h200v200h-80Z"/>
    </Icon>
  );
};

IconMaterialBarcodeScanner.displayName = 'OnesyIconMaterialBarcodeScanner';

export default IconMaterialBarcodeScanner;
