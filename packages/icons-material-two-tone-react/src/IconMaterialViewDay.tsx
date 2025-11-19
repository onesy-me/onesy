import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewDay = (props: IIcon) => {

  return (
    <Icon
      name='ViewDay'

      short_name='ViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10h15v4H4z" opacity=".3"/><path d="M2 18h19v2H2zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6H4v-4h15v4zM2 4h19v2H2z"/>
    </Icon>
  );
};

IconMaterialViewDay.displayName = 'OnesyIconMaterialViewDay';

export default IconMaterialViewDay;
