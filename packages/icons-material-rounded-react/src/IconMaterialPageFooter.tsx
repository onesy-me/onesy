import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageFooter = (props: IIcon) => {

  return (
    <Icon
      name='PageFooter'

      short_name='PageFooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-120H160q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120ZM200-280q-33 0-56.5-23.5T120-360v-400q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v400q0 33-23.5 56.5T760-280H200Zm0-80h560v-400H200v400Zm0 0v-400 400Z"/>
    </Icon>
  );
};

IconMaterialPageFooter.displayName = 'OnesyIconMaterialPageFooter';

export default IconMaterialPageFooter;
