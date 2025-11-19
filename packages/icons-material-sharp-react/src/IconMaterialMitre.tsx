import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMitre = (props: IIcon) => {

  return (
    <Icon
      name='Mitre'

      short_name='Mitre'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360v-240h100v-80H520v-240h280v240H700v80h100v240H520Zm80-80h120v-80H600v80Zm0-320h120v-80H600v80ZM160-40v-240h100v-80H160v-240h100v-80H160v-240h280v240H340v80h100v240H340v80h100v240H160Zm80-80h120v-80H240v80Zm0-320h120v-80H240v80Zm0-320h120v-80H240v80Zm420 280Zm0-320ZM300-160Zm0-320Zm0-320Z"/>
    </Icon>
  );
};

IconMaterialMitre.displayName = 'OnesyIconMaterialMitre';

export default IconMaterialMitre;
