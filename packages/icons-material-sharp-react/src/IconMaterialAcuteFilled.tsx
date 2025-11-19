import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAcuteFilled = (props: IIcon) => {

  return (
    <Icon
      name='AcuteFilled'

      short_name='Acute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160q-134 0-227-93t-93-227q0-133 93-226.5T600-800q133 0 226.5 93.5T920-480q0 134-93.5 227T600-160Zm91-171 57-57-108-108v-144h-80v177l131 132ZM80-600v-80h160v80H80ZM40-440v-80h200v80H40Zm40 160v-80h160v80H80Z"/>
    </Icon>
  );
};

IconMaterialAcuteFilled.displayName = 'OnesyIconMaterialAcuteFilled';

export default IconMaterialAcuteFilled;
