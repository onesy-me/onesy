import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStorageFilled = (props: IIcon) => {

  return (
    <Icon
      name='StorageFilled'

      short_name='Storage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z"/>
    </Icon>
  );
};

IconMaterialStorageFilled.displayName = 'OnesyIconMaterialStorageFilled';

export default IconMaterialStorageFilled;
