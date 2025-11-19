import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderColorW100 = (props: IIcon) => {

  return (
    <Icon
      name='BorderColorW100'

      short_name='BorderColor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80 0v-56h800V0H80Zm160-277h39l364-364-19-20-20-19-364 364v39Zm-28 28v-79l470-470 79 79-470 470h-79Zm509-470-39-39 39 39Zm-78 78-19-20-20-19 39 39Z"/>
    </Icon>
  );
};

IconMaterialBorderColorW100.displayName = 'OnesyIconMaterialBorderColorW100';

export default IconMaterialBorderColorW100;
