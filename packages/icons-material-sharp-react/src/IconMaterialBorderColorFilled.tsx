import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderColorFilled = (props: IIcon) => {

  return (
    <Icon
      name='BorderColorFilled'

      short_name='BorderColor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80 0v-160h800V0H80Zm80-240v-170l505-504 168 171-503 503H160Zm504-448 56-56-56-56-56 56 56 56Z"/>
    </Icon>
  );
};

IconMaterialBorderColorFilled.displayName = 'OnesyIconMaterialBorderColorFilled';

export default IconMaterialBorderColorFilled;
