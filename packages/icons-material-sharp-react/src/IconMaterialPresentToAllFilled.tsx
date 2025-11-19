import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPresentToAllFilled = (props: IIcon) => {

  return (
    <Icon
      name='PresentToAllFilled'

      short_name='PresentToAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-320h80v-166l64 63 57-57-161-160-160 160 57 56 63-63v167ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialPresentToAllFilled.displayName = 'OnesyIconMaterialPresentToAllFilled';

export default IconMaterialPresentToAllFilled;
