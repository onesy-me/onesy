import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileExport = (props: IIcon) => {

  return (
    <Icon
      name='FileExport'

      short_name='FileExport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM202-65l-56-57 118-118h-90v-80h226v226h-80v-89L202-65Zm278-15v-80h240v-440H520v-200H240v400h-80v-480h400l240 240v560H480Z"/>
    </Icon>
  );
};

IconMaterialFileExport.displayName = 'OnesyIconMaterialFileExport';

export default IconMaterialFileExport;
