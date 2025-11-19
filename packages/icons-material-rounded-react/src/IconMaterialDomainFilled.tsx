import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainFilled = (props: IIcon) => {

  return (
    <Icon
      name='DomainFilled'

      short_name='Domain'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-560q0-33 23.5-56.5T160-840h240q33 0 56.5 23.5T480-760v80h320q33 0 56.5 23.5T880-600v400q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200Zm80 0h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h320v-400H480v80h80v80h-80v80h80v80h-80v80Zm160-240v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialDomainFilled.displayName = 'OnesyIconMaterialDomainFilled';

export default IconMaterialDomainFilled;
