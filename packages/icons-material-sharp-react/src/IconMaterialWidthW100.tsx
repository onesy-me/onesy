import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthW100 = (props: IIcon) => {

  return (
    <Icon
      name='WidthW100'

      short_name='Width'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M295-358 172-481l123-123 20 20-89 90h508l-88-90 19-19 123 123-123 123-19-19 88-90H225l89 89-19 19Z"/>
    </Icon>
  );
};

IconMaterialWidthW100.displayName = 'OnesyIconMaterialWidthW100';

export default IconMaterialWidthW100;
