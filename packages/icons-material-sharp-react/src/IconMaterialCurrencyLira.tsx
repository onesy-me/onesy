import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyLira = (props: IIcon) => {

  return (
    <Icon
      name='CurrencyLira'

      short_name='CurrencyLira'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120v-206l-120 75v-95l120-75v-94l-120 75v-94l120-76v-230h80v180l160-100v94L440-565v94l160-100v94L440-376v176q83 0 141.5-58.5T640-400h80q0 117-81.5 198.5T440-120h-80Z"/>
    </Icon>
  );
};

IconMaterialCurrencyLira.displayName = 'OnesyIconMaterialCurrencyLira';

export default IconMaterialCurrencyLira;
