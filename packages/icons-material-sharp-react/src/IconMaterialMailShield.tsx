import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailShield = (props: IIcon) => {

  return (
    <Icon
      name='MailShield'

      short_name='MailShield'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-520 320-200H160l320 200Zm56 360H80v-640h800v331l-80-40v-131L480-440 160-640v400h361q2 21 5 40.5t10 39.5ZM760-40q-69-17-114.5-79.5T600-258v-102l160-80 160 80v102q0 76-45.5 138.5T760-40Zm0-84q35-17 57.5-54t22.5-80v-52l-80-40v226ZM160-240v-289 20-211 480Z"/>
    </Icon>
  );
};

IconMaterialMailShield.displayName = 'OnesyIconMaterialMailShield';

export default IconMaterialMailShield;
