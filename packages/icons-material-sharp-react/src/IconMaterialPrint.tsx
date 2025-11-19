import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrint = (props: IIcon) => {

  return (
    <Icon
      name='Print'

      short_name='Print'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-360h800v360H720v160Zm80-240v-200H160v200h80v-80h480v80h80Z"/>
    </Icon>
  );
};

IconMaterialPrint.displayName = 'OnesyIconMaterialPrint';

export default IconMaterialPrint;
