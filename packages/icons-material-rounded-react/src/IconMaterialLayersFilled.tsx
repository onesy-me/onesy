import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersFilled = (props: IIcon) => {

  return (
    <Icon
      name='LayersFilled'

      short_name='Layers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M161-366q-16-12-15.5-31.5T162-429q11-8 24-8t24 8l270 209 270-209q11-8 24-8t24 8q16 12 16.5 31.5T799-366L529-156q-22 17-49 17t-49-17L161-366Zm270 8L201-537q-31-24-31-63t31-63l230-179q22-17 49-17t49 17l230 179q31 24 31 63t-31 63L529-358q-22 17-49 17t-49-17Z"/>
    </Icon>
  );
};

IconMaterialLayersFilled.displayName = 'OnesyIconMaterialLayersFilled';

export default IconMaterialLayersFilled;
