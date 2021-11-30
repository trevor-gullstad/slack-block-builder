import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const imageUrl = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.imageUrl,
    methodName: Prop.ImageUrl,
    propSetterPropName: Prop.ImageUrl,
    slackDtoParamName: SlackDto.mapParam(Prop.ImageUrl),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
