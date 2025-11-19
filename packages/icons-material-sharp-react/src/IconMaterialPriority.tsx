import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriority = (props: IIcon) => {

  return (
    <Icon
      name='Priority'

      short_name='Priority'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-100 0-170-70t-70-170v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240q0 100-70 170t-170 70H360Zm80-200 240-240-56-56-184 184-88-88-56 56 144 144Zm-80 120h240q66 0 113-47t47-113v-240q0-66-47-113t-113-47H360q-66 0-113 47t-47 113v240q0 66 47 113t113 47Zm120-280Z"/>
    </Icon>
  );
};

IconMaterialPriority.displayName = 'OnesyIconMaterialPriority';

export default IconMaterialPriority;
