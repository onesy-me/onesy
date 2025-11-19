import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTornado = (props: IIcon) => {

  return (
    <Icon
      name='Tornado'

      short_name='Tornado'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-840h880L480-80 40-840Zm139 80 69 120h464l69-120H179Zm116 200 69 120h232l69-120H295Zm116 200 69 120 69-120H411Z"/>
    </Icon>
  );
};

IconMaterialTornado.displayName = 'OnesyIconMaterialTornado';

export default IconMaterialTornado;
