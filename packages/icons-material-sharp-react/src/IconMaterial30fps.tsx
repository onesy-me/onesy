import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial30fps = (props: IIcon) => {

  return (
    <Icon
      name='30fps'

      short_name='30fps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-120h240v-100H80v-120h240v-100H80v-120h360v220l-60 60 60 60v220H80Zm520-120h160v-320H600v320ZM480-200v-560h400v560H480Z"/>
    </Icon>
  );
};

IconMaterial30fps.displayName = 'OnesyIconMaterial30fps';

export default IconMaterial30fps;
