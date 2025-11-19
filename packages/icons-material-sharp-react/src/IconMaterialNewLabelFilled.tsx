import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewLabelFilled = (props: IIcon) => {

  return (
    <Icon
      name='NewLabelFilled'

      short_name='NewLabel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-120H80v-80h120v-120h80v120h120v80H280v120h-80Zm280-40v-240H360v-120H120v-200h522l198 280-198 280H480Z"/>
    </Icon>
  );
};

IconMaterialNewLabelFilled.displayName = 'OnesyIconMaterialNewLabelFilled';

export default IconMaterialNewLabelFilled;
