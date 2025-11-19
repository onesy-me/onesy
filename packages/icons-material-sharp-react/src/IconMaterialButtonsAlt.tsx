import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialButtonsAlt = (props: IIcon) => {

  return (
    <Icon
      name='ButtonsAlt'

      short_name='ButtonsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-480h800v480H80Zm80-80h640v-320H160v320Zm130-40h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm-130 40v-320 320Z"/>
    </Icon>
  );
};

IconMaterialButtonsAlt.displayName = 'OnesyIconMaterialButtonsAlt';

export default IconMaterialButtonsAlt;
