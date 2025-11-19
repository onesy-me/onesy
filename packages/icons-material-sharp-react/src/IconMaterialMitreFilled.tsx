import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMitreFilled = (props: IIcon) => {

  return (
    <Icon
      name='MitreFilled'

      short_name='Mitre'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360v-240h100v-80H520v-240h280v240H700v80h100v240H520ZM160-40v-240h100v-80H160v-240h100v-80H160v-240h280v240H340v80h100v240H340v80h100v240H160Z"/>
    </Icon>
  );
};

IconMaterialMitreFilled.displayName = 'OnesyIconMaterialMitreFilled';

export default IconMaterialMitreFilled;
